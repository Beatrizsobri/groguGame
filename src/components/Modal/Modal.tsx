import "./modal.scss";

interface ModalProps {
    show: boolean;
    title: string; 
    handleOnClick: () => void;
    image: string;
}

export const Modal = ({show, title, image, handleOnClick}: ModalProps) => {
    if(!show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal_content">
                <header className="modal_header">
                    <h4 className="modal_header_title">
                        {title}
                    </h4>
                </header>
                <img className="modal_image" src={image} alt={title}/>
                <footer className="modal_footer">
                    <button onClick={handleOnClick} className="modal_footer_button">
                        Volver a jugar
                    </button>
                </footer>
            </div>
         </div>


    )
}