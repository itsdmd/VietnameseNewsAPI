// Query the database

import * as dotenv from "dotenv";
import mongoose from "mongoose";

import ttVnModel from "../models/ttArticleVn.js";
import tnVnModel from "../models/tnArticleVn.js";
import vnxVnModel from "../models/vnxArticleVn.js";

dotenv.config();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
console.log("\n[query] Connecting to Database.");

db.on("error", (error) => console.log("\n[transactor] Error connecting to database: " + error));
db.once("open", async () => {
	console.log("\n[query] Connected to Database");
});

const limit = 10;
export async function query(input, filter = { _id: 0, content: 0 }, offset = 0) {
	const res_tt = await ttVnModel
		.find(input, filter)
		.sort("metadata.pubdate.isodate")
		.limit(offset * limit);

	const res_tn = await tnVnModel
		.find(input, filter)
		.sort("metadata.pubdate.isodate")
		.limit(offset * limit);

	const res_vnx = await vnxVnModel
		.find(input, filter)
		.sort("metadata.pubdate.isodate")
		.limit(offset * limit);

	const result = res_tt.concat(res_tn, res_vnx);

	result.sort((a, b) => {
		const aDate = new Date(a.metadata.pubdate.isodate);
		const bDate = new Date(b.metadata.pubdate.isodate);
		return aDate - bDate;
	});

	return result.slice(offset * limit, (offset + 1) * limit);
}
