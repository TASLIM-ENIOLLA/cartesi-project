"use client";

import { useState, useEffect } from "react";

type ComponentPropsType = {
	images: File [],
	onChange: ({ images }: { images: File [] }) => void
}

export default function Component({ images, onChange }: ComponentPropsType): React.ReactNode {
	const [files, setFiles] = useState <File []> ([]);

	function removeFiles(index: number): void {
		setFiles(files => files.filter((_: File, i: number) => i !== index));
	}

	useEffect(() => {
		if(images?.length && !files.length) {
			setFiles(images);
		}

		if(typeof onChange === "function") {
			onChange({ images: files });
		}
	}, [images, files, onChange]);

	if(files.length) {
		return (
			<div className="p-3 border rounded-md">
				<div className="space-y-3">
					<div className="space-y-3">
						{files.map(({ name }: File, index: number) => (
							<div key={index} className="p-3 border rounded-md">
								<div className="flex">
									<div className="flex-1">
										{name}
									</div>
									<button
										onClick={() => removeFiles(index)}
										className="capitalize hover:underline text-red-600 font-medium"
									>
										remove
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="text-center">
						<button onClick={() => setFiles([])} className="text-red-600 hover:underline font-medium">
							Remove all
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="p-3 text-center border rounded-md">
			<label>
				<input
					hidden
					multiple
					type="file"
					accept=".jpeg, .jpg, .png, .gif"
					onChange={({target: { files }}) => {
						if(files) {
							setFiles(Array.from(files))
						}
					}}
				/>
				<span className="hover:underline cursor-pointer text-blue-600 font-medium">
					Click here to pick file(s)
				</span>
			</label>
		</div>
	);
}