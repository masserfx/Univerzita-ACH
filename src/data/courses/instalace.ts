import { Course } from '../types';

export const instalaceTepelnychCerpadel: Course = {
  id: 'instalace-tepelnych-cerpadel',
  title: 'Instalace tepelných čerpadel',
  description: 'Pokročilý kurz o instalaci a údržbě',
  duration: '45 minut',
  level: 'intermediate',
  tags: ['instalace', 'údržba', 'servis'],
  modules: [
    {
      id: 'priprava-instalace',
      title: 'Příprava instalace',
      content: 'Naučíte se, jak správně připravit místo pro instalaci tepelného čerpadla. Seznámíte se s požadavky na umístění, elektroinstalaci a hydraulické připojení.'
    },
    {
      id: 'postup-instalace',
      title: 'Postup instalace',
      content: 'Krok za krokem si projdeme celý proces instalace tepelného čerpadla, od prvotního umístění až po finální spuštění a testování systému.'
    }
  ]
}; 