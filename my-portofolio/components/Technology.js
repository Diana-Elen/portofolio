import style from "../style/Technology.module.css"

export default function Technology({title, isActive, onShow, children}) {
    return <>
    <div className={style.technology}>
        <h3>{title}</h3>
        {isActive ? (
            <p>{children}</p>
        ) : (
            <button onClick={onShow}>
                show
            </button> 
        )
        }
    </div>
    
    </>
}