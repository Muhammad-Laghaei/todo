type status = "ToDo" | "InProgress" | "Testing" | "Complete";

export const statusAccess = (status: status) => {
  const statuses = {
    ToDo: ["ToDo", "InProgress", "Testing", "Complete"],
    InProgress: ["InProgress", "Testing", "Complete"],
    Testing: ["Testing", "Complete"],
    Complete: ["Complete"],
  };
  return statuses[status];
};
