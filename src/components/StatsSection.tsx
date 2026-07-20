import {
  FaUsers,
  FaUnity,
  FaUserGraduate,
  FaCampground,
} from "react-icons/fa";


const stats = [
    {
    id: 1,
    value: "50 +",
    title: "Instructors",
    icon: <FaUsers />,
    color: "#2F80ED",
  },
  {
    id: 2,
    value: "10 +",
    title: "Affiliated States",
    icon: <FaUnity />,
    color: "#2D9CFF",
  },
  
  {
    id: 3,
    value: "100 +",
    title: "Tournaments Organised",
    icon: <FaUserGraduate />,
    color: "#F2994A",
  },
  {
    id: 4,
    value: "50 +",
    title: "Training Camps",
    icon: <FaCampground />,
    color: "#F2C94C",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      {/* <h3>Company Growth in 2019</h3> */}

      <div className="stats-container">
        {stats.map((item) => (
          <div className="stat-card" key={item.id}>
            <div
              className="icon-circle"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>

            <div className="stat-content">
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;