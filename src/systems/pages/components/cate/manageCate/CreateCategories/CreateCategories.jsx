export default function CreateCategories() {
    return (
        <div>
            <p className="text-2xl">Tạo Danh Mục</p>

            <div className="mt-10 text-base flex">
                Bạn chưa biết về danh mục ?
                <p className="text-base cursor-pointer text-[blue]">
                    (xem tại đây)
                </p>
            </div>

            <div className="mt-8 w-[100%]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tên danh mục
                </label>
                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[50%]"
                    placeholder="tên danh mục"
                    required
                />
            </div>

            <div className=""></div>
        </div>
    );
}
