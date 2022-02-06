import "./recipient.scss";

interface RecipientProps {
    quantity: number; 
    image: string;
    altText: string;
}

export const Recipient = ({quantity, image, altText}: RecipientProps) => {
    return (
        <ul className="recipient">
            {[...Array(quantity)].map(()=> <li><img src={image} alt={altText}/></li>)}
        </ul>
    )
}