import './style.css'
import finance from "../../assets/imgs/profit.png"
export default function HeaderUser(){
    return(
        <>
            <header className="header-user">
                <nav className="pdr-container">
                    <div className="img-finance">
                         <img src={finance} alt="" />
                    </div>

                    <div className='txt1'>Despesa</div>
                    <div className='txt1'>Categoria</div>
                </nav>
            </header>
        </>
    )   
}