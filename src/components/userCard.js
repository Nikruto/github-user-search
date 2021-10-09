import React from "react";
import moment from "moment";

function UserCard({ user }) {
  const time = moment(user.created_at);

  return (
    <div className="bg-white dark:bg-gray-700 p-4 sm:p-8 rounded">
      <div className="flex">
        <div className="flex flex-1">
          <div>
            <img className="w-20 h-20 rounded-full" src={user.avatar_url} />
          </div>
          <div className="ml-6 flex flex-col sm:flex-row sm:justify-between flex-1">
            <div>
              <h2 className="text-2xl font-medium">{user.login}</h2>
              <a className="text-blue-600" href={user.html_url}>
                @{user.login}
              </a>
            </div>
            <p className="text-sm text-gray-400 leading-8">
              Joined {time.format("DD")} {time.format("MMM")}{" "}
              {time.format("YYYY")}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:ml-[6.5rem] mt-2 sm:-mt-4">
        <p className="text-gray-400">{user.bio || "This user has no bio"}</p>
        <div className="mt-4 bg-blue-50 dark:bg-gray-800 rounded flex py-4 px-6">
          <div className="flex-1 flex flex-col">
            <span className="text-sm text-gray-400">Repos</span>
            <span className="text-xl font-medium">{user.public_repos}</span>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-sm text-gray-400">Followers</span>
            <span className="text-xl">{user.followers}</span>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-sm text-gray-400">Following</span>
            <span className="text-xl">{user.following}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
