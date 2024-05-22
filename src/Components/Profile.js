//import { Avatar } from "./Avatar.js";
import Avatar from "./Avatar";

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar
            size={100}
            person={{
                name: 'Katsuko Saruhashi',
                imageId: 'MK3eW3Am'
            }}
            />
        </Card>
    );
}