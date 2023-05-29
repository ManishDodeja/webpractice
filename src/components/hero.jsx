import GFG from '../images/gfg.png'
function hero() {
  return (
    <>
        <div className="flex-container">
                <div className="text-container">
                    <h2>Geeks for Geeks</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempore rerum eligendi iusto modi quidem, nihil itaque repellendus aperiam esse dignissimos quis, aspernatur culpa hic sint qui eius doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa excepturi reprehenderit magnam. Illum quam beatae, est nihil minus, placeat voluptate culpa itaque possimus nulla magnam in optio nam. Atque?</p>
                </div>

                <div className="image-container"
                >
                    <img src={GFG} alt="gfg image here" />
                </div>
        </div>  
    </>
  )
}

export default hero