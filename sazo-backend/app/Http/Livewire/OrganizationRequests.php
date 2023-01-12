<?php

namespace App\Http\Livewire;

use App\Actions\Organization\AcceptAction;
use App\Enums\OrganizationType;
use App\Models\Organization;
use Illuminate\Support\Collection;
use Livewire\Component;

class OrganizationRequests extends Component
{
    public function accept($organization)
    {
        $organization = Organization::find($organization);

        try {
            AcceptAction::execute(organization: $organization);
            $this->reset();
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function render()
    {
        return view('livewire.organization-requests', [
            'organizations' => Organization::where('type', OrganizationType::DRAFT)->with('author')->get()
        ])->layout('layouts.default');
    }
}
