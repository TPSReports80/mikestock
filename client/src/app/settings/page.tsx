"use client";

import React, { useState } from "react";
import Header from "../components/Header";

type UserSetting = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockSettings: UserSetting[] = [
  {
    label: "Username",
    value: "mike joo",
    type: "text",
  },
  {
    label: "Email",
    value: "mike.joo@example.com",
    type: "text",
  },
  {
    label: "Notification",
    value: true,
    type: "toggle",
  },
  {
    label: "Dark Mode",
    value: false,
    type: "toggle",
  },
  {
    label: "Language",
    value: "English",
    type: "text",
  },
];

const Settings = () => {
  const [userSettings, setUserSettings] = useState<UserSetting[]>(mockSettings);

  const handleToggleChange = (i: number) => {
    const settingsCopy = [...userSettings];
    settingsCopy[i].value = !settingsCopy[i].value as boolean;
    setUserSettings(settingsCopy);
  };

  return (
    <div className="w-full">
      <Header name="User Settings" />
      <div className="overflow-x-auto mt-5 shadow-md">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Setting
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {userSettings.map((setting, index) => (
              <tr className="hover:bg-blue-50" key={setting.label}>
                <td className="py-2 px-4">{setting.label}</td>
                <td className="py-2 px-4">
                  {setting.type === "toggle" ? (
                    <label className="inline-flex items-center relative cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.value as boolean}
                        onChange={() => handleToggleChange(index)}
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-400 peer-focus:ring-4 
                        transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-blue-600"
                      ></div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-white bg-gray-800 dark:text-gray-900 text-gray-100"
                      value={setting.value as string}
                      onChange={(e) => {
                        const settingsCopy = [...userSettings];
                        settingsCopy[index].value = e.target.value;
                        setUserSettings(settingsCopy);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
