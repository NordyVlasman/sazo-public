@section('header')
    <header class="bg-gray-50 py-8 border-b border-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
            <div class="min-w-0 flex-1">
                <h1 class="mt-2 text-2xl font-medium leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Dashboard</h1>
            </div>
        </div>
    </header>
@endsection


<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="px-4 sm:px-0">
        <h2 class="text-lg font-medium text-gray-900">Organizations</h2>
        <div class="hidden sm:block">
            <div class="border-b border-gray-200">
                <nav class="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                    <!-- Current: "border-violet-500 text-violet-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
                    <a href="#" class="border-violet-500 text-violet-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                        Applied
                        @if(count($organizations) > 0)
                            <span class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">{{ count($organizations) }}</span>
                        @endif
                    </a>
                </nav>
            </div>
        </div>
    </div>

    <!-- Stacked list -->
    <ul role="list" class="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0">
        @forelse($organizations as $organization)
        <li>
            <a href="#" class="group block">
                <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                    <div class="flex min-w-0 flex-1 items-center">
                        <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                                <p class="truncate text-sm font-medium text-violet-600">{{ $organization->name }}</p>
                                <p class="mt-2 flex items-center text-sm text-gray-500">
                                    <!-- Heroicon name: mini/envelope -->
                                    <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                    </svg>
                                    <span class="truncate">{{ $organization->author->email }}</span>
                                </p>
                            </div>
                            <div class="hidden md:block">
                                <div>
                                    <p class="text-sm text-gray-900">
                                        Applied on
                                        <time datetime="{{ $organization->created_at }}">{{ $organization->humanDate() }}</time>
                                    </p>
                                    <p class="mt-2 flex items-center text-sm text-gray-500">
                                        <span class="mr-1.5 h-2.5 w-2.5 bg-yellow-600 flex-shrink-0 rounded-full"></span>
                                        Needs verification
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            wire:click="accept({{ $organization->id }})"
                            type="button"
                            class="inline-flex items-center rounded-md border border-transparent bg-violet-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </a>
        </li>
        @empty
            <div class="mt-4">
                <span class="text-md">No organizations to check.</span>
            </div>
        @endforelse
    </ul>
</div>
