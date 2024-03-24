const Bloglist = ({blogs, title, handleDelete}) => {
 

    return (
    <div className="wrapper"> 
    <h1>{title}</h1> <hr/>
    {blogs.map((blog)=>(
    <div className="blog-preview" key={blog.id}>
       <h2>{blog.title}</h2> <hr/>
        <p>{blog.body}</p>
         <p>Written by:{blog.author}</p>
        <button onClick={()=> handleDelete(blog.id)}>Delete</button>
    </div>
    ))}
      </div>
    );
}
 
export default Bloglist;