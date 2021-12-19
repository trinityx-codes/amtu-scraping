-- CreateTable
CREATE TABLE "lines" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "routes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "place" TEXT NOT NULL,
    "streats_list" TEXT NOT NULL,
    "lineId" INTEGER NOT NULL,
    CONSTRAINT "routes_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "lines" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bus_running" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "running_day_type" TEXT NOT NULL,
    "district_time" TEXT NOT NULL,
    "terminal_time" TEXT NOT NULL,
    "lineId" INTEGER NOT NULL,
    CONSTRAINT "bus_running_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "lines" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
