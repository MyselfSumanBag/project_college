import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
	id,
	image,
	name,
	description,
	imagesOfThePlace,
	mustKnow,
	howToReach,
	placesToVisit,
}) => {
	return (
		<>
			<Link
				to={`/blogs/${id}`}
				onClick={() => {
					window.scrollTo(0, 0);
				}}
				state={{
					id,
					image,
					name,
					description,
					imagesOfThePlace,
					mustKnow,
					howToReach,
					placesToVisit,
				}}
			>
				<div className="p-4 rounded-md m-2 transition-all duration-500 hover:shadow-xl border shadow-2xl">
					<div className="overflow-hidden">
						<img
							src={image}
							alt="No image"
							className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
						/>
					</div>
					<h1 className="mt-4 mb-4 text-3xl">{name}</h1>
					<h1 className="text-sm">{description[0]}</h1>
				</div>
			</Link>
		</>
	);
};

export default BlogCard;
