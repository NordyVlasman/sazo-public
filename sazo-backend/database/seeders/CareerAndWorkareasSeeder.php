<?php

namespace Database\Seeders;

use App\Models\Career;
use App\Models\Workarea;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CareerAndWorkareasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Workarea::create([
            'name' => '🚑 Ambulancezorg',
            'value' => 'ambulancezorg'
        ]);

        Workarea::create([
            'name' => '🧑🏼‍⚕️ Eerstelijnszorg',
            'value' => 'eerstelijnszorg'
        ]);

        Workarea::create([
            'name' => '💭 Geestelijke gezondheidszorg',
            'value' => 'geestelijke_gezondheidszorg'
        ]);

        Workarea::create([
            'name' => '🦠 GGD',
            'value' => 'ggd'
        ]);

        Workarea::create([
            'name' => '🫰🏼 Gehandicaptenzorg',
            'value' => 'gehandicaptenzorg'
        ]);

        Workarea::create([
            'name' => '👧🏼 Jeugdzorg',
            'value' => 'jeugdzorg'
        ]);

        Workarea::create([
            'name' => '🤰🏼 Kraamzorg',
            'value' => 'kraamzorg'
        ]);

        Workarea::create([
            'name' => '👴🏼 Ouderenzorg',
            'value' => 'ouderenzorg'
        ]);

        Workarea::create([
            'name' => '🤝🏼 Sociaal werk',
            'value' => 'sociaal_werk'
        ]);

        Workarea::create([
            'name' => '🏡 Thuiszorg',
            'value' => 'thuiszorg'
        ]);

        Workarea::create([
            'name' => '🔍 Bevolkingsonderzoek',
            'value' => 'bevolkingsonderzoek'
        ]);

        Workarea::create([
            'name' => '⛑️ Zorg algemeen',
            'value' => 'zorg_algemeen'
        ]);

        Career::create([
            'name' => '👩🏼‍🎓 Stage',
            'value' => 'stage'
        ]);

        Career::create([
            'name' => '💼 Werkplek',
            'value' => 'werkplek',
        ]);

        Career::create([
            'name' => '🤝🏼 Samenwerken',
            'value' => 'samenwerken'
        ]);

        Career::create([
            'name' =>  '👀 Oriëntatie in de zorg',
            'value' => 'orientatie_in_de_zorg'
        ]);
    }
}
