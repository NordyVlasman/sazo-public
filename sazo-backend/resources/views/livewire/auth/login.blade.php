<div>
    <div class="row">
        <div class="col-md-12">
            @if (session()->has('message'))
                <div class="alert alert-success">
                    {{ session('message') }}
                </div>
            @endif
            @if (session()->has('error'))
                <div class="alert alert-danger">
                    {{ session('error') }}
                </div>
            @endif
        </div>
    </div>
    <form>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Email :</label>
                    <input type="text" wire:model="email" class="form-control">
                    @error('email') <span class="text-danger error">{{ $message }}</span>@enderror
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Password :</label>
                    <input type="password" wire:model="password" class="form-control">
                    @error('password') <span class="text-danger error">{{ $message }}</span>@enderror
                </div>
            </div>
            <div class="col-md-12 text-center">
                <button class="btn text-white btn-success" wire:click.prevent="login">Login</button>
            </div>
        </div>
    </form>
</div>
