import "./mainlist.css";
import { Input } from "@/components/ui/input";
export default function Mainlist() {
    return (
        <div>
            <div>
                <div>
                    <div>이름</div>
                    <Input type="String" placeholder="name" />
                </div>
                <div>
                    <div>가격</div>
                    <Input type="number" placeholder="price" />
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}
