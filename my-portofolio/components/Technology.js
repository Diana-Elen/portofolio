import style from "../style/Technology.module.css"

export default function Technology({isActive, title, onShow, children}) {
    return <>
    <div className={style.technology}>
        {isActive ? (
            <p className={style.par}>{children}</p>
        ) : (
            <button onClick={onShow} className={style.button_style}>
                {title}
            </button> 
        )
        }
    </div>
    
    </>
}