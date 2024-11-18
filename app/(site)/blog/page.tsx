import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      <main>
        <h1 className="text-[46px] text-center text-black w-2/5 mx-auto leading-[49px]">Integrate your faith at work
        Build flourishing cities</h1>
        <section>
          <img src='' alt='' />


        </section>

        <section>
          <div className="">
            <h3>
            According to Barna Research, only 1% of Christians
            worldwide are directly working in the religion sphere (ministry, missions, etc.), leaving the vast majority of believers engaged in other spheres of society, from arts to technology to government.
            </h3>
            <div className="">
              <div className="">
              <img src="" alt="" />
              </div>
              <div className="">
                <h4>
                That represents an enormous opportunity to create culturally widespread impact, but roughly 65% of believers are disengaged from their work and view it as separate from their faith. This reveals that most Christians don’t realize that work was designed by God as a partnered effort toward restoring the world to its original  goodness. But when people do realize that faith and work are designed by God to be integrated, work becomes an act of worship, and everything changes – lives, families, and entire.
                </h4>
                <strong>
                We’re here to help leaders identify their unique position in God’s story and fully integrate their faith and work lives, enabling them to impact their communities and cities on a systemic level.
                </strong>
              </div>
            </div>
          </div>
          <div className="">
            
            </div>
        </section>
       
      </main>
    </>
  );
};

export default BlogPage;
