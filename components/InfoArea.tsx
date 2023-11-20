import Info from "./info";

const InfoArea = () => {
  const data = [
    {
      id: 1,
      title: "Avenida do Porto, Porto 123",
      content: "Morada",
      icon: "MapPin"
    },
    {
      id: 2,
      title: "Seg - Seg",
      subtitle: "10:00 às 23:00",
      content: "Horário de funcionamento",
      icon: "Clock10"
    },
    {
      id: 3,
      title: "(+351) 939-999-999",
      content: "Contato",
      icon: "Phone"
    },
  ];

  return (
    <article className="flex justify-evenly items-center py-24">
      {data.map((data) => (
        <Info
          key={data.id}
          icon={data.icon}
          iconSize="sm"
          title={data.title}
          subtitle={data?.subtitle}
          content={data.content}
        />
      ))}
    </article>
  );
};

export default InfoArea;
