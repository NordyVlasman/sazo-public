<?php

namespace App\Actions\Post;

use App\DataObjects\PostObject;
use App\Models\Career;
use App\Models\Post;
use App\Models\Workarea;
use GrahamCampbell\Markdown\Facades\Markdown;

class CreateAction
{
    private Post $post;
    private array $data;

    public function execute(PostObject $data): Post
    {
        $this->data = $data->toArray();

        $this->createPost();
        $this->addHtmlToPost();
        $this->createFiles();
        $this->addWorkAreasAndTagsToPost();

        return $this->post;
    }

    protected function createPost(): void
    {
        $this->post = Post::create([
            'description' => $this->data['description'],
            'author_id' => $this->data['author_id'],
        ]);
    }

    protected function addHtmlToPost(): void
    {
        if (empty($this->data['description'])) {
            return;
        }
        $this->post->description_html = Markdown::convert($this->data['description'])->getContent();
        $this->post->save();
    }

    protected function createFiles(): void
    {
        if (empty($this->data['files'])) {
            return;
        }

        foreach ($this->data['files'] as $file) {
            $this->post->files()->create([
                'file_path' => config('app.image_base_url').$file['file_path'],
                'file_type' => $file['file_type'],
                'preview_file_path' => $file['preview_file_path'],
            ]);
        }
    }

    private function addWorkAreasAndTagsToPost(): void
    {
        // TODO: - make this more dynamic. Both workarea and career have the same value, maybe add a type?
        if ($this->data['workarea']) {
            $workarea = Workarea::where('value', $this->data['workarea'])->firstOrFail();
            $this->post->update(['workarea_id' => $workarea->id]);
        }

        if ($this->data['career']) {
            $career = Career::where('value', $this->data['career'])->firstOrFail();
            $this->post->update(['career_id' => $career->id]);
        }
    }
}
