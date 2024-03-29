import Item from "./item"
import { COMPANY, COMPANY1 , COMPANY2 , COMPANY3 , COMPANY4 , COMPANY5 , COMPANY6} from "./menus"

const Itemscontainer=() => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 lg:grid-cols-7 gap-6 sm:px-8 px-5 py-16">
      
      <Item Links={COMPANY} title="Club1"/>
      <Item Links={COMPANY2} title="Club2"/>
      <Item Links={COMPANY3} title="Club3"/>
      <Item Links={COMPANY4} title="Club4"/>
      <Item Links={COMPANY5} title="Club5"/>
      <Item Links={COMPANY6} title="Club6"/>
      <Item Links={COMPANY1} title="Club7"/>
      
    </div>
  )
}

export default Itemscontainer
