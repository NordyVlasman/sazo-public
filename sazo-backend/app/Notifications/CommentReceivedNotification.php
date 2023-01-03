<?php

namespace App\Notifications;

use App\Types\Notification;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;

class CommentReceivedNotification extends Notification
{
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(
        public array $payload
    ){ }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return $this->email()
            ->subject('Nieuwe reactie - ' . \Str::limit($this->payload['value'], 40))
            ->markdown('mail.notification.comment', $this->payload);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return $this->payload;
    }
}
