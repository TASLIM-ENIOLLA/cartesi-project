"use client";

import Template from "../__components/Template";

export default function Page() {
	return (
		<Template
			title="products"
			subtitle="a list of product under your company"
		>
			<div className="rounded-lg overflow-hidden">
				<table className="table-auto w-full">
					<thead className="bg-gray-600 w-full">
						<tr className="text-left text-white">
							<th>S/N</th>
							<th>Product name</th>
							<th>Product number</th>
							<th>Description</th>
							<th>Expiration date</th>
						</tr>
					</thead>
					<tbody className="w-full">
						{Array(10).fill({
							product: {
								name: "Cheese ball",
								number: "1205-6904-4453",
								description: "Lorem ipsum dolor sit amet consectuer adipising. lorem ipsum dolor sit amet consectuer adipising",
								expirationDate: new Date().toLocaleTimeString()
							}
						}).map(({ product }, index: number) => (
							<tr className="border-b" key={index}>
								<td>{index + 1}</td>
								<td>{product.name}</td>
								<td>{product.number}</td>
								<td>{product.description}</td>
								<td>{product.expirationDate}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Template>
	);
}