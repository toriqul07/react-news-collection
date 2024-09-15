
import Marquee from "react-fast-marquee";
const BreakingNew = () => {
    return (
        <div className="flex items-center">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNew;