const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h3 className="section-subtitle">{subtitle}</h3>
        <h2 className="section-title">{title}</h2>
    </div>
  )
}

export default SectionTitle