export default function Card({ icon: Icon, text, iconStyle, titulo }) {
    return (
        <div className="w-[80%] md:w-[90%]  lg:w-[28%] m-auto rounded-lg border-4 border-b-violet-800 flex flex-col justify-center items-center shadow-lg text-center mt-8 text-purple-900 hover:scale-105 hover:cursor-pointer transition-transform transform">
            {Icon && <Icon className="text-orange-600" style={iconStyle} />}
            <h4 className="lg:pt-4 pb-2  text-2xl font-semibold font-custom">{titulo}</h4>
            <p className="lg:pl-6 lg:pr-6 pt-4 pb-4 md:pl-2 md:pr-2 hover:text-orange-600">{text}</p>
        </div>
    );
}