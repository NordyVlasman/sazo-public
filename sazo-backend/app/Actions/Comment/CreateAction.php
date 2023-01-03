<?php

namespace App\Actions\Comment;

use App\Actions\Notification\StoreAction;
use App\DataObjects\CommentObject;
use App\Enums\NotificationType;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use App\Notifications\CommentReceivedNotification;
use GrahamCampbell\Markdown\Facades\Markdown;

class CreateAction
{
    private ?array $data;

    private Post $post;

    private Comment $comment;
    private User $user;

    public function execute(CommentObject $object): Comment
    {
        $this->data = $object->toArray();

        $this->findPostAndUser();
        $this->createComment();
        $this->addHtmlToComment();
        $this->incrementReactionCount();
        $this->createNotification();

        return $this->comment;
    }

    protected function findPostAndUser(): void
    {
        $this->post = Post::findOrFail($this->data['post_id']);
        $this->user = User::findOrFail($this->data['user_id']);
    }

    protected function createComment(): void
    {
        $this->comment = $this->post->comments()->create([
            'user_id' => $this->data['user_id'],
            'body' => $this->data['body'],
        ]);
    }

    protected function addHtmlToComment(): void
    {
        if (! empty($this->data['html'])) {
            $this->comment->body_html = $this->data['html'];
        } else {
            $this->comment->body_html = Markdown::convert($this->data['body'])->getContent();
        }

        $this->comment->save();
        $this->comment->refresh();
    }

    protected function incrementReactionCount(): void
    {
        $this->post->comments_count += 1;
        $this->post->save();
    }

    private function createNotification(): void
    {
        $payload = [
            'post' => $this->post->description,
            'user' => $this->user->full_name,
            'url' => 'https://app.volcar.dev/',
            'value' => $this->comment->body,
        ];

        $this->post->author->notify(new CommentReceivedNotification($payload));

        $this->post->bookmarkers->each(function (User $user) {
           StoreAction::execute($user, NotificationType::COMMENT, $this->post->description );
        });
    }
}
