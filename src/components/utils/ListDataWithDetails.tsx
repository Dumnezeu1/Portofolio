import React from "react";
import "../style/dist/Home.css";

interface ListDataProps {
  listData: Array<{
    id: number;
    name: string;
    descriptions: Array<{
      id: number;
      name: string;
    }>;
    date: string;
    technologies?: Array<{
      id: number;
      name: string;
    }>;
  }>;
}

const ListDataWithDetails: React.FC<ListDataProps> = ({ listData }) => {
  return (
    <div>
      {listData.map((data) => {
        const { id, name, descriptions, date, technologies } = data;
        return (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              minHeight: 50,
              margin: "40px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginRight: 5,
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: 5 }}>{name}</h3>
              {descriptions.map((description) => {
                const { id, name } = description;
                return (
                  <small key={id} style={{ marginTop: 5, color: "gray" }}>
                    {name}
                  </small>
                );
              })}

              {technologies && (
                <div style={{ marginTop: 10 }}>
                  {technologies.map((technology) => {
                    const { id, name } = technology;
                    return (
                      <small
                        key={id}
                        style={{ marginRight: 10, fontWeight: 600 }}
                      >
                        {name}
                      </small>
                    );
                  })}
                </div>
              )}
            </div>
            <small style={{ color: "gray" }}>{date}</small>
          </div>
        );
      })}
    </div>
  );
};

export default ListDataWithDetails;
