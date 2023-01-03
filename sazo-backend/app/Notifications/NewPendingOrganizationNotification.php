<?php

namespace App\Notifications;


use App\Models\Organization;
use App\Types\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Str;

class NewPendingOrganizationNotification extends Notification
{
    public function __construct(
        public Organization $organization
    ) {
    }

    /**
     * Retrieve the array representation of the notification.
     *
     */
    public function toArray($notifiable) : array
    {
        return $this->organization->toArray();
    }

    /**
     * Retrieve the mail representation of the notification.
     *
     */
    public function toMail($notifiable) : MailMessage
    {
        $name = $this->organization->name;

        return $this->email()
            ->subject('Nieuwe organisatie aanvraag')
            ->markdown('mail.admin.request', compact('name'));
    }
}
