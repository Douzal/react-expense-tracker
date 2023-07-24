import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  console.log(`items?.length > 0 : ${items?.length > 0}`);
  // console.log(`items : ${JSON.stringify(items)}`);
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {
            items?.length > 0 ?
              items.map((item, i) => {
                return (
                  <ListItem key={item.name + i} item={item}/>
                );
              }):
              'Aucun objet en liste...'
          }
        </tbody>
      </table>
    </div>
  );
}
