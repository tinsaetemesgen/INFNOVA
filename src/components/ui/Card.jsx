

export default function Card({ children, className }) {
    return (
        <div className={`base-card-styles ${className}`}>
            {children}
        </div>
    )
}