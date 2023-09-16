import CardList from "../../components/cardlist.component";
import { cardData } from "../../utils/fake-data";
import { data } from "../../utils/data";
import SearchAndSortComponent from "../../components/search-sort.component";
import Footer from "../../components/footer.component";

const Home = () => {
    const items = [];
    return(
        <div className='p-3'>
            <CardList  cardData={data}/>
            <Footer/>
        </div>
    );
}
export default Home