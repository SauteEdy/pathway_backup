export default function Card({ icon: Icon, text, iconStyle, titulo, className }) {
    return (
      <div className={className}>
        {Icon && <Icon className="text-orange-600" style={iconStyle} />}
        <h4 className="text-2xl font-semibold font-custom lg:pt-4 pb-2">{titulo}</h4>
        <p className="pt-4 pb-4 md:pl-2 md:pr-2 lg:pl-6 lg:pr-6 hover:text-orange-600">{text}</p>
      </div>
    );
  }