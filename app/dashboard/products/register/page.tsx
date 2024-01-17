"use client";

import Template from "../../__components/Template";
import ImagePicker from "./__components/ImagePicker";

export default function Page() {
	return (
		<Template
			title="register product"
			subtitle="add a new product to your company"
		>
			<form className="max-w-[550px] mx-auto space-y-10">
				<fieldset className="border-t space-y-7">
					<legend className="text-center inline-block px-3 font-medium capitalize">
						<span className="text-blue-600">product information</span>
					</legend>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">name</div>
						<input className="block w-full border p-3 rounded-md" />
					</div>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">NAFDAC reg. no.</div>
						<input className="block w-full border p-3 rounded-md" />
					</div>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">batch no.</div>
						<input className="block w-full border p-3 rounded-md" />
					</div>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">expiration date</div>
						<input type="date" className="block w-full border p-3 rounded-md" />
					</div>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">image</div>
						<ImagePicker images={[]} onChange={() => null} />
					</div>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">description</div>
						<textarea rows={5} className="block resize-none w-full border p-3 rounded-md"></textarea>
					</div>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">ingredients / composition</div>
						<textarea rows={5} className="block resize-none w-full border p-3 rounded-md"></textarea>
					</div>
				</fieldset>
				<fieldset className="border-t space-y-7">
					<legend className="text-center inline-block px-3 font-medium capitalize">
						<span className="text-blue-600">manufacturer&apos;s information</span>
					</legend>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">name</div>
						<input className="block w-full border p-3 rounded-md" />
					</div>
					<div className="space-y-1">
						<div className="text-gray-600 font-medium capitalize">physical address</div>
						<textarea rows={5} className="block resize-none w-full border p-3 rounded-md"></textarea>
					</div>
				</fieldset>
				<input
					type="submit"
					value="register product"
					className="font-medium uppercase bg-blue-600 text-white border p-3 rounded-md"
				/>
			</form>
		</Template>
	);
}