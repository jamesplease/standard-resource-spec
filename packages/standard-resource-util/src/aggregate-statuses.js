export default function aggregateStatuses(statuses) {
  let idle = true;
  let pending = false;
  let failed = false;
  let succeeded = false;

  let successCount = 0;
  let pendingCount = 0;

  for (let i = 0; i < statuses.length; i++) {
    const status = statuses[i];
    if (status.failed) {
      idle = false;
      failed = true;
      break;
    } else if (status.pending) {
      pendingCount++;
    } else if (status.succeeded) {
      successCount++;
    }
  }

  if (!failed && pendingCount > 0) {
    idle = false;
    pending = true;
  } else if (successCount === statuses.length) {
    idle = false;
    succeeded = true;
  }

  return { null: idle, pending, failed, succeeded };
}
