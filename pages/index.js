const Home = () => {
  return ( 
    <div>
      <h1>Welcome!!</h1>
      <p>This is my default page and it has its own styles</p>

      <style jsx>{`
        h1 {
          color: grey
        }

        p {
          color: red
        }
      `}</style>
    </div> 
  );
}
 
export default Home;
