import React from "react";
function Announcements() {
  return (
    <div>
      <div className="w-auto">
        <h1 className="text-xl font-bold pb-4 text-center max-[850px]:pt-10">Announcements</h1>
        <table class="table-fixed max-[850px]:mx-auto">
          <thead>
            <tr className="border-cyan-100 border">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-cyan-100 border">
              <td>
                <div className="grid grid-rows-2 grid-cols-2 group mx-4 my-2">
                  <div className="col-span-2 font-extrabold text-center border-b-[1px]">Announcement 1</div>
                  <div className="text-center border-r-2">lorem</div>
                  <div className="text-center">ipsum</div>
                  <div className="col-span-2 hidden group-hover:block group-hover:max-w-min mx-auto">Ut Lorem qui duis minim cillum ut sit reprehenderit voluptate culpa minim amet. Eiusmod occaecat cupidatat anim ullamco</div>
                </div>
              </td>
            </tr>
            <tr className="border-cyan-100 border">
              <td>
                <div className="grid grid-rows-2 grid-cols-2 group mx-4 my-2">
                  <div className="col-span-2 font-extrabold text-center border-b-[1px]">Announcement 2</div>
                  <div className="text-center border-r-2">lorem</div>
                  <div className="text-center">ipsum</div>
                  <div className="col-span-2 hidden group-hover:block group-hover:max-w-min mx-auto">Ut Lorem qui duis minim cillum ut sit reprehenderit voluptate culpa minim amet. Eiusmod occaecat cupidatat anim ullamco</div>
                </div>
              </td>
            </tr>
            <tr className="border-cyan-100 border">
              <td>
                <div className="grid grid-rows-2 grid-cols-2 group mx-4 my-2">
                  <div className="col-span-2 font-extrabold text-center border-b-[1px]">Announcement 3</div>
                  <div className="text-center border-r-2">lorem</div>
                  <div className="text-center">ipsum</div>
                  <div className="col-span-2 hidden group-hover:block group-hover:max-w-min mx-auto">Ut Lorem qui duis minim cillum ut sit reprehenderit voluptate culpa minim amet. Eiusmod occaecat cupidatat anim ullamco</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Announcements;