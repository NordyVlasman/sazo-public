<?php

namespace App\Http\Livewire\Auth;

use Livewire\Component;

class Login extends Component
{
    public string $email = "";
    public string $password = "";

    public function login()
    {
        $validatedData = $this->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (\Auth::attempt(credentials: [
            'email'     => $this->email,
            'password'  => $this->password
        ])) {
            session()->flash('message', 'Welcome');
        } else {
            session()->flash('error', 'Sorry, cant log you in right now');
        }
    }

    public function render(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('livewire.auth.login')
            ->layout('layouts.default');
    }
}
