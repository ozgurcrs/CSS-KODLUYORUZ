import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <div className="userInfo">
            <i class="fas fa-apple-alt"></i>
            <label>Hi! Özgür Çiriş</label>
          </div>
          <div className="basket">
            <div className="shopping">
              <label>1</label>
              <i class="fas fa-shopping-basket"></i>
              
            </div>
          </div>
        </header>
       <div className="mainContainer">
            <div className="cards">
              <div className="card animate__animated animate__tada">
                <img src="https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png" alt=""/>
              </div>
            </div>
       </div>
      </div>
    </div>
  );
}

export default App;
