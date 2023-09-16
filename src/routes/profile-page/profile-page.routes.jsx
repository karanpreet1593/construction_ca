import ProfilePageHeader from "./profile-header";
import ProfilePagePhotosList from "./profile-photo-list";
import { data } from "../../utils/data";

const ProfilePage = () => {
    const obj = data[4]
    return(
        //main
        <div className='flex flex-col'>
            <div className="proTitle flex justify-center items-center h-10 border-b-2 border-gray-900 sm:hidden ">
                <h2 className="font-semibold">{obj.name}</h2>
            </div>
            <div className="profileHeader flex flex-col sm:flex-row ">
                <div className="headerImg w-28 h-28 sm:w-52 sm:h-52 ml-3 mt-3 rounded-full p-1 overflow-hidden
                 bg-gradient-to-b from-yellow-500 via-red-500 to-pink-500
                  flex justify-center items-center
                  sm:mr-10 sm:my-5" >
                    <img className="w-26 h-26 sm:w-48 sm:h-48 rounded-full "
                     src={obj.imgURL} alt=""/>
                </div>
                <div className="profileInfo flex flex-col justify-start items-start p-2 sm:mt-10">
                    <h2 className="font-semibold text-sm sm:text-lg ">{obj.compnayName}</h2>
                    {
                        obj.services.map((service,idx) =>
                        <p key={idx+43} className="ml-1">{`- ${service}`}</p>
                        )
                    }
                </div>
            </div>

            <div className='photoList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                lg:grid-cols-4 gap-1 mt-1.5 mb-3 mx-3 '>
                <img className=" object-cover " src="https://media.kijiji.ca/api/v1/ca-prod-fsbo-ads/images/c7/c7505bfe-76bd-46ce-b48c-1596ae5fc6fc?rule=kijijica-640-jpg" alt="" />
                <img className=" object-cover" src="https://media.cnn.com/api/v1/images/stellar/prod/230719081030-us-new-home-construction-0615-restricted.jpg?c=original" alt=""/>
                <img className="" src="https://www.castlehomes.com/wp-content/uploads/2013/10/Alderson-Elevation1OPT.jpg" alt=""/>
                <img className="" src="https://st.hzcdn.com/simgs/pictures/exteriors/sugar-hill-custom-home-ironwood-construction-group-llc-img~9cd1b2f10c2fcdef_4-2858-1-f2919dc.jpg" alt=""/>
                <img className="" src="https://xpainting.ca/wp-content/uploads/2021/06/OFFICE-PAINTERS-IN-BRAMPTON-2.jpg" alt=""/>
            </div>
        </div>
    );
}
export default ProfilePage