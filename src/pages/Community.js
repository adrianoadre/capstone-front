import CommunityPosts from "../components/posts";

function Community(){

    return(
        
        <div className="row p-5 bg-light">
            <div className="col-3"/>
            <div className="col-6">




            <CommunityPosts/>
            <CommunityPosts/>
            <CommunityPosts/>
            <CommunityPosts/>
            <CommunityPosts/>
            <CommunityPosts/>


            </div>
            <div className="col-3"/>

        </div>

    );
}

export default Community;