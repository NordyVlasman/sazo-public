<?php

namespace App\Console\Commands;

use App\Actions\User\CreateAction;
use App\Console\Commands\Concerns\CanValidateInput;
use App\DataObjects\UserObject;
use Illuminate\Console\Command;
use Illuminate\Encryption\Encrypter;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class InstallCommand extends Command
{
    use CanValidateInput;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sazo:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install a fresh copy of the application';

    /**
     * Execute the console command.
     *
     */
    public function handle()
    {
        $this->intro();
        $this->refreshDatabase();
        $this->seedDatabase();
        $this->linkStorage();
        $this->createAdmin();
        $this->runInstallation();

        $this->components->info('Saweeeeet 🤘 You are good to go, lets log you in');
    }

    protected function intro(): void
    {
        $this->newLine();
        $this->header('Sazo');
        $this->components->twoColumnDetail('App Name', value(config('app.name')));
        $this->components->twoColumnDetail('Laravel version', value(app()->version()));
        $this->components->twoColumnDetail('PHP version', value(trim(phpversion())));
        $this->components->twoColumnDetail('Debug Mode', value(config('app.debug') ? '<fg=yellow;options=bold>ENABLED</>' : 'OFF'));
        $this->components->twoColumnDetail('URL', value(Str::of(config('app.url'))->replace(['http://', 'https://'], '')));
        $this->components->twoColumnDetail('Maintenance', value($this->laravel->isDownForMaintenance() ? '<fg=yellow;options=bold>ENABLED</>' : 'OFF'));
        $this->newLine();
        $this->components->twoColumnDetail('Github: https://github.com/nordyvlasman/sazo-public');
        $this->newLine();
    }

    protected function refreshDatabase(): void
    {
        $this->header(heading:'Database settings');

        if ($this->components->confirm(question: 'Do you want to run the migrations to set up everything fresh? (php artisan migrate:fresh)')) {
            $this->call(command: 'migrate:fresh');
        }
    }

    protected function seedDatabase(): void
    {
        if ($this->components->confirm(question:'Do you want to add basic data? (Roles, Workareas etc.)')) {
            $this->call(command: 'db:seed');
        }
    }

    protected function linkStorage(): void
    {
        if (! file_exists(public_path(path: 'storage'))) {
            $this->header(heading: 'Storage');
            if ($this->components->confirm(question: 'Your storage does not seem to be linked, do you want me to do this?')) {
                $this->call(command: 'storage:link');
            }
        }
    }

    protected function createAdmin(): void
    {
        $this->header('Admin Data');

        $data = $this->getAdminData();

        $userDto = new UserObject(
            first_name: $data['first_name'],
            last_name: $data['last_name'],
            email: $data['email'],
            tagline: null,
            avatar_path: null,
            username: $data['username'],
            password: $data['password'],
            password_confirmation: $data['password']
        );

        app(CreateAction::class)->execute(object: $userDto);
    }

    private function getAdminData(): array
    {
        return [
            'first_name' => $this->validateInput(fn () => $this->ask('First name'), 'first_name', ['required']),
            'last_name' => $this->validateInput(fn () => $this->ask('Last name'), 'last_name', ['required']),
            'email' => $this->validateInput(fn () => $this->ask('email'), 'email', ['required', 'email']),
            'username' => $this->validateInput(fn () => $this->ask('username'), 'username', ['required']),
            'password' => Hash::make($this->validateInput(fn () => $this->secret('Password'), 'password', ['required', 'min:8'])),
            'role' => $this->components->choice('Role', ['Admin', 'Teacher', '']),
        ];
    }

    protected function header(string $heading)
    {
        return $this->components->twoColumnDetail('  <fg=green;options=bold>'.$heading.'</>');
    }

    protected function writeSeparationLine()
    {
        $this->info('*---------------------------------------------------------------------------*');
    }

    protected function runInstallation()
    {
        $key = $this->generateRandomKey();

        file_put_contents($this->laravel->environmentFilePath(), preg_replace(
            $this->keyReplacementPattern(),
            'API_SECRET='.$key,
            file_get_contents($this->laravel->environmentFilePath())
        ));
    }

    protected function generateRandomKey(): string
    {
        return 'base64:'.base64_encode(Encrypter::generateKey($this->laravel['config']['app.cipher']));
    }

    protected function keyReplacementPattern(): string
    {
        $escaped = preg_quote('='.$this->laravel['config']['api.secret'], '/');

        return "/^API_SECRET{$escaped}/m";
    }
}

