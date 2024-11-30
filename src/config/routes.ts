import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Hotels from '../pages/Hotels';
import Newsletter from '../pages/Newsletter';
import Retreats from '../pages/Retreats';
import Terms from '../pages/Terms';
import PuntaIslita from '../pages/subpages/Hotels_sub/Punta-Islita';
import AbidOru from '../pages/subpages/Hotels_sub/AbidOru';
import ElMangroove from '../pages/subpages/Hotels_sub/ElMangroove';
import ElRompido from '../pages/subpages/Hotels_sub/ElRompido';
import FZHeliTours from '../pages/subpages/Hotels_sub/FZHeliTours';
import Monument from '../pages/subpages/Hotels_sub/Monument';
import Poseidon from '../pages/subpages/Hotels_sub/Poseidon';
import PreciseTale from '../pages/subpages/Hotels_sub/PreciseTale';
import RitzyCharters from '../pages/subpages/Hotels_sub/RitzyCharters';
import RoyalBalloon from '../pages/subpages/Hotels_sub/RoyalBalloon';
import SeehofDavos from '../pages/subpages/Hotels_sub/SeehofDavos';
import Sowaka from '../pages/subpages/Hotels_sub/Sowaka';
import TaleBerlin from '../pages/subpages/Hotels_sub/TaleBerlin';
import TheOcean from '../pages/subpages/Hotels_sub/TheOcean';
import ArtBreathwork from '../pages/subpages/Retreats_sub/ArtBreathwork';
import TherapistsGetaway from '../pages/subpages/Retreats_sub/TherapistsGetaway';
import YogaRetreat from '../pages/subpages/Retreats_sub/YogaRetreat';
import ArtofWomanhood from '../pages/subpages/Retreats_sub/ArtofWomanhood';
import RomanceOnCoast from '../pages/subpages/Retreats_sub/RomanceOnCoast'
import NutritionWellness from '../pages/subpages/Retreats_sub/NutritionWellness';
import LgbtqSafeSpace from '../pages/subpages/Retreats_sub/LgbtqSafeSpace';
import TherapistsConnect from '../pages/subpages/Retreats_sub/TherapistsConnect';
import SoulmateMatching from '../pages/subpages/Retreats_sub/SoulmateMatching';
import BalanceBliss from '../pages/subpages/Retreats_sub/BalanceBliss'
import BodyWisdom from '../pages/subpages/Retreats_sub/BodyWisdom';
import NewfoundSisterhood from '../pages/subpages/Retreats_sub/NewfoundSisterhood';




interface RouteType {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

const routes: RouteType[] = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/hotels', component: Hotels },
  { path: '/newsletter', component: Newsletter },
  { path: '/retreats', component: Retreats },
  { path: '/terms', component: Terms },
  { path: '/Punta-Islita', component: PuntaIslita },
  { path: '/ElMangroove', component: ElMangroove },
  { path: '/ElRompido', component: ElRompido },
  { path: '/FZHeliTours', component: FZHeliTours },
  { path: '/Monument', component: Monument },
  { path: '/Poseidon', component: Poseidon },
  { path: '/PreciseTale', component: PreciseTale },
  { path: '/RitzyCharters', component: RitzyCharters },
  { path: '/RoyalBalloon', component: RoyalBalloon },
  { path: '/SeehofDavos', component: SeehofDavos },
  { path: '/Sowaka', component: Sowaka },
  { path: '/TaleBerlin', component: TaleBerlin },
  { path: '/TheOcean', component: TheOcean },
  { path: '/AbidOru', component: AbidOru },
  { path: '/ArtBreathwork', component: ArtBreathwork },
  { path: '/TherapistsGetaway', component: TherapistsGetaway },
  { path: '/YogaRetreat', component: YogaRetreat },
  { path: '/ArtofWomanhood', component: ArtofWomanhood },
  { path: '/RomanceOnCoast', component: RomanceOnCoast },
  { path: '/NutritionWellness', component: NutritionWellness },
  { path: '/LgbtqSafeSpace', component: LgbtqSafeSpace},
  { path: '/TherapistsConnect', component: TherapistsConnect },
  { path: '/SoulmateMatching', component: SoulmateMatching },
  { path: '/BalanceBliss', component: BalanceBliss },
  { path: '/BodyWisdom', component: BodyWisdom},
  { path: '/NewfoundSisterhood', component: NewfoundSisterhood },

];

export default routes;
