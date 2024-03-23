import { useState } from "react";
import Bloglist from "./bloglist";





const Home = () => {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "World War 2",
            body: "World War II[b] or the Second World War was a global conflict that lasted from 1939 to 1945. The vast majority of the world's countries, including all the great powers, fought as part of two opposing military alliances: the Allies and the Axis. Many participating countries invested all available economic, industrial, and scientific capabilities into this total war, blurring the distinction between civilian and military resources. Aircraft played a major role, enabling the strategic bombing of population centres and delivery of the only two nuclear weapons ever used in war. It was by far the deadliest conflict in history, resulting in 70–85 million fatalities. Millions died due to genocides, including the Holocaust, as well as starvation, massacres, and disease. In the wake of Axis defeat, Germany, Austria, and Japan were occupied, and war crime tribunals were conducted against German and Japanese leaders",
            author: "Godfrey"
    },
    {
        id: 2,
        title: "Effect On Countries",
        body: "The causes of the war are debated; contributing factors included the rise of fascism in Europe, the Spanish Civil War, the Second Sino-Japanese War, Soviet Japanese border conflicts, and tensions in the aftermath of World War I. World War II is generally considered to have begun on 1 September 1939, when Nazi Germany, under Adolf Hitler, invaded Poland. The United Kingdom and France declared war on Germany on 3 September. Under the Molotov Ribbentrop Pact of August 1939, Germany and the Soviet Union had partitioned Poland and marked out their spheres of influence across Finland, Estonia, Latvia, Lithuania, and Romania. From late 1939 to early 1941, in a series of campaigns and treaties, Germany conquered or controlled much of continental Europe in a military alliance called the Axis with Italy, Japan, and other countries.",
        author: "Oladimeji"
    
    
    },
    {
        id: 3,
        title: "conclusion",
        body: "Following the onset of campaigns in North and East Africa, and the fall of France in mid-1940, the war continued primarily between the European Axis powers and the British Empire, with the war in the Balkans, the aerial Battle of Britain, the Blitz of the UK, and the Battle of the Atlantic. In June 1941, Germany led the European Axis powers in an invasion of the Soviet Union, opening the Eastern Front, the largest land theatre of war in history.Japan aimed to dominate East Asia and the Asia-Pacific, and by 1937 was at war with the Republic of China. In December 1941, Japan attacked American and British territories with near-simultaneous offensives against Southeast Asia and the Central Pacific, including an attack on Pearl Harbor which resulted in the United States and the United Kingdom declaring war against Japan. The European Axis powers declared war on the US in solidarity. Japan soon conquered much of the western Pacific, but its advances were halted in 1942 after losing the critical Battle of Midway; Germany and Italy were defeated in North Africa and at Stalingrad in the Soviet Union. Key setbacks in 1943—including German defeats on the Eastern Front, the Allied invasions of Sicily and the Italian mainland, and Allied offensives in the Pacific—cost the Axis powers their initiative and forced them into strategic retreat on all fronts",
        author: "Bunmi"
    
    }])
 
const handleDelete = (id) => {
const filterblogs= blogs.filter((blog)=> blog.id !== id)
setBlogs(filterblogs)
    }
    return ( 
<>
<Bloglist blogs= {blogs} title= "All THE BLOGS" handleDelete={handleDelete}/>
<Bloglist blogs= {blogs.filter((blog) => blog.title === "Effect On Countries")} title= "Effect on Countries"/>
</>

)
}
 
export default Home;