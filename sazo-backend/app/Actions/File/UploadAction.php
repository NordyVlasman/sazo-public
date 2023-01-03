<?php

namespace App\Actions\File;

use App\Support\MimeHelper;
use Aws\S3\PostObjectV4;
use Aws\S3\S3Client;
use Carbon\Carbon;
use Illuminate\Support\Str;

class UploadAction
{
    private array $data;

    private ?string $fileKey;

    private ?string $prefix;

    private ?string $fileType;

    private ?PostObjectV4 $awsResponse;

    private array $response;

    public function execute(array $data): array
    {
        $this->data = $data;

        $this->generateFileKey();
        $this->sendRequest();
        $this->parseResponse();

        return $this->response;
    }

    protected function generateFileKey(): void
    {
        $uuid = Str::uuid() . 'Application' .MimeHelper::getMimeFromExtension($this->data['mime_type']);

        switch ($this->data['file_type']) {
            case 'post':
                $this->prefix = 'p/'.\Date::now()->year.'/';
                $this->fileType = 'PresignedPostFile';
                break;
            case 'user':
                $this->prefix = 'u/'.\Date::now()->year.'/';
                $this->fileType = 'PresignedUserFile';
                break;
            case 'organization':
                $this->prefix = 'o/'.\Date::now()->year.'/';
                $this->fileType = 'PresignedOrganizationFile';
                break;
            default:
                $this->prefix = 'unknown/'.\Date::now()->year.'/';
                $this->fileType = 'PresignedFile';
                break;
        }

        $this->fileKey = $this->prefix.$uuid;
    }

    protected function sendRequest(): void
    {
        $s3 = config('filesystems.disks.s3');

        $client = new S3Client([
            'version' => 'latest',
            'region' => $s3['region'],
            'credentials' => [
                'key' => $s3['key'],
                'secret' => $s3['secret'],
            ],
        ]);

        $bucket = $s3['bucket'];
        $expires = '+30 minutes';

        $formInputs = [
            'key' => $this->fileKey,
            'success_action_status' => '201',
        ];

        $options = [
            ['bucket' => $bucket],
            ['starts-with', '$key', $this->prefix],
            ['success_action_status' => '201'],
        ];

        $this->awsResponse = new PostObjectV4(
            client: $client,
            bucket: $bucket,
            formInputs: $formInputs,
            options: $options,
            expiration: $expires
        );
    }

    /**
     * Although this works, I want to move this to a mapper
     * which is way cleaner than this.
     *
     * @todo move to mapper
     */
    protected function parseResponse(): void
    {
        $attributes = $this->awsResponse->getFormAttributes();
        $inputs = $this->awsResponse->getFormInputs();

        $this->response = [
            'type' => $this->fileType,
            'acl' => null,
            'key' => $inputs['key'],
            'content_type' => null,
            'expires' => Carbon::now()->addMinutes(30),
            'policy' => $inputs['Policy'],
            'success_action_status' => $inputs['success_action_status'],
            'url' => $attributes['action'],
            'x_amz_algorithm' => $inputs['X-Amz-Algorithm'],
            'x_amz_credential' => $inputs['X-Amz-Credential'],
            'x_amz_date' => $inputs['X-Amz-Date'],
            'x_amz_signature' => $inputs['X-Amz-Signature'],
        ];
    }
}
