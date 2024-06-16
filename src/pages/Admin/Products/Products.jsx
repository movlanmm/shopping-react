import React from "react";

export default function Products() {
  return (
    <>
      <div className="toolbar d-flex flex-stack py-3 py-lg-5" id="kt_toolbar">
        {/*begin::Container*/}
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap"
        >
          {/*begin::Page title*/}
          <div className="page-title d-flex flex-column me-3">
            {/*begin::Title*/}
            <h1 className="d-flex text-dark fw-bold my-1 fs-3">Products</h1>
            {/*end::Title*/}
            {/*begin::Breadcrumb*/}
            <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7 my-1">
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-600">
                <a
                  href="../../demo18/dist/index.html"
                  className="text-gray-600 text-hover-primary"
                >
                  Home
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-600">eCommerce</li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-600">Catalog</li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-500">Products</li>
              {/*end::Item*/}
            </ul>
            {/*end::Breadcrumb*/}
          </div>
          {/*end::Page title*/}
          {/*begin::Actions*/}
          <div className="d-flex align-items-center py-2">
            {/*begin::Wrapper*/}
            <div className="me-4">
              {/*begin::Menu*/}
              <a
                href="#"
                className="btn btn-sm btn-flex btn-light btn-active-primary fw-bold"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i className="ki-duotone ki-filter fs-5 text-gray-500 me-1">
                  <span className="path1" />
                  <span className="path2" />
                </i>
                Filter
              </a>
              {/*begin::Menu 1*/}
              <div
                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                data-kt-menu="true"
                id="kt_menu_64b77968371b6"
              >
                {/*begin::Header*/}
                <div className="px-7 py-5">
                  <div className="fs-5 text-dark fw-bold">Filter Options</div>
                </div>
                {/*end::Header*/}
                {/*begin::Menu separator*/}
                <div className="separator border-gray-200" />
                {/*end::Menu separator*/}
                {/*begin::Form*/}
                <div className="px-7 py-5">
                  {/*begin::Input group*/}
                  <div className="mb-10">
                    {/*begin::Label*/}
                    <label className="form-label fw-semibold">Status:</label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <div>
                      <select
                        className="form-select form-select-solid"
                        multiple="multiple"
                        data-kt-select2="true"
                        data-close-on-select="false"
                        data-placeholder="Select option"
                        data-dropdown-parent="#kt_menu_64b77968371b6"
                        data-allow-clear="true"
                      >
                        <option />
                        <option value={1}>Approved</option>
                        <option value={2}>Pending</option>
                        <option value={2}>In Process</option>
                        <option value={2}>Rejected</option>
                      </select>
                    </div>
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-10">
                    {/*begin::Label*/}
                    <label className="form-label fw-semibold">
                      Member Type:
                    </label>
                    {/*end::Label*/}
                    {/*begin::Options*/}
                    <div className="d-flex">
                      {/*begin::Options*/}
                      <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                        <span className="form-check-label">Author</span>
                      </label>
                      {/*end::Options*/}
                      {/*begin::Options*/}
                      <label className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={2}
                          defaultChecked="checked"
                        />
                        <span className="form-check-label">Customer</span>
                      </label>
                      {/*end::Options*/}
                    </div>
                    {/*end::Options*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-10">
                    {/*begin::Label*/}
                    <label className="form-label fw-semibold">
                      Notifications:
                    </label>
                    {/*end::Label*/}
                    {/*begin::Switch*/}
                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        name="notifications"
                        defaultChecked="checked"
                      />
                      <label className="form-check-label">Enabled</label>
                    </div>
                    {/*end::Switch*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="d-flex justify-content-end">
                    <button
                      type="reset"
                      className="btn btn-sm btn-light btn-active-light-primary me-2"
                      data-kt-menu-dismiss="true"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary"
                      data-kt-menu-dismiss="true"
                    >
                      Apply
                    </button>
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Form*/}
              </div>
              {/*end::Menu 1*/}
              {/*end::Menu*/}
            </div>
            {/*end::Wrapper*/}
            {/*begin::Button*/}
            <a
              href="#"
              className="btn btn-sm btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
              id="kt_toolbar_primary_button"
            >
              Create
            </a>
            {/*end::Button*/}
          </div>
          {/*end::Actions*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Toolbar*/}
      {/*begin::Container*/}
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl"
      >
        {/*begin::Post*/}
        <div className="content flex-row-fluid" id="kt_content">
          {/*begin::Products*/}
          <div className="card card-flush">
            {/*begin::Card header*/}
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
              {/*begin::Card title*/}
              <div className="card-title">
                {/*begin::Search*/}
                <div className="d-flex align-items-center position-relative my-1">
                  <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                  <input
                    type="text"
                    data-kt-ecommerce-product-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search Product"
                  />
                </div>
                {/*end::Search*/}
              </div>
              {/*end::Card title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <div className="w-100 mw-150px">
                  {/*begin::Select2*/}
                  <select
                    className="form-select form-select-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Status"
                    data-kt-ecommerce-product-filter="status"
                  >
                    <option />
                    <option value="all">All</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {/*end::Select2*/}
                </div>
                {/*begin::Add product*/}
                <a
                  href="../../demo18/dist/apps/ecommerce/catalog/add-product.html"
                  className="btn btn-primary"
                >
                  Add Product
                </a>
                {/*end::Add product*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-0">
              {/*begin::Table*/}
              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id="kt_ecommerce_products_table"
              >
                <thead>
                  <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th className="w-10  pe-2">
                      <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-kt-check="true"
                          data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                          defaultValue={1}
                        />
                      </div>
                    </th>
                    <th className="min-w-200px">Product</th>
                    <th className="text-end min-w-100px">SKU</th>
                    <th className="text-end min-w-70px">Qty</th>
                    <th className="text-end min-w-100px">Price</th>
                    <th className="text-end min-w-100px">Rating</th>
                    <th className="text-end min-w-100px">Status</th>
                    <th className="text-end min-w-70px">Actions</th>
                  </tr>
                </thead>
                <tbody className="fw-semibold text-gray-600">
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/43.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 43
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">03267002</span>
                    </td>
                    <td className="text-end pe-0" data-order={35}>
                      <span className="fw-bold ms-3">35</span>
                    </td>
                    <td className="text-end pe-0">194</td>
                    <td className="text-end pe-0" data-order="rating-3">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Inactive">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-danger">Inactive</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/44.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 44
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">01255007</span>
                    </td>
                    <td className="text-end pe-0" data-order={8}>
                      <span className="badge badge-light-warning">
                        Low stock
                      </span>
                      <span className="fw-bold text-warning ms-3">8</span>
                    </td>
                    <td className="text-end pe-0">131</td>
                    <td className="text-end pe-0" data-order="rating-5">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Scheduled">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-primary">Scheduled</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/45.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 45
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">02105008</span>
                    </td>
                    <td className="text-end pe-0" data-order={26}>
                      <span className="fw-bold ms-3">26</span>
                    </td>
                    <td className="text-end pe-0">63</td>
                    <td className="text-end pe-0" data-order="rating-4">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Inactive">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-danger">Inactive</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/46.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 46
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">02322002</span>
                    </td>
                    <td className="text-end pe-0" data-order={16}>
                      <span className="fw-bold ms-3">16</span>
                    </td>
                    <td className="text-end pe-0">50</td>
                    <td className="text-end pe-0" data-order="rating-3">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Published">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-success">Published</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/47.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 47
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">04913008</span>
                    </td>
                    <td className="text-end pe-0" data-order={9}>
                      <span className="badge badge-light-warning">
                        Low stock
                      </span>
                      <span className="fw-bold text-warning ms-3">9</span>
                    </td>
                    <td className="text-end pe-0">214</td>
                    <td className="text-end pe-0" data-order="rating-4">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Published">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-success">Published</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/48.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 48
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">03854001</span>
                    </td>
                    <td className="text-end pe-0" data-order={31}>
                      <span className="fw-bold ms-3">31</span>
                    </td>
                    <td className="text-end pe-0">193</td>
                    <td className="text-end pe-0" data-order="rating-4">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Scheduled">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-primary">Scheduled</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/49.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 49
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">04734002</span>
                    </td>
                    <td className="text-end pe-0" data-order={18}>
                      <span className="fw-bold ms-3">18</span>
                    </td>
                    <td className="text-end pe-0">284</td>
                    <td className="text-end pe-0" data-order="rating-4">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Scheduled">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-primary">Scheduled</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {/*begin::Thumbnail*/}
                        <a
                          href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage:
                                "url(assets/media//stock/ecommerce/50.png)",
                            }}
                          />
                        </a>
                        {/*end::Thumbnail*/}
                        <div className="ms-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-product-filter="product_name"
                          >
                            Product 50
                          </a>
                          {/*end::Title*/}
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <span className="fw-bold">04541005</span>
                    </td>
                    <td className="text-end pe-0" data-order={22}>
                      <span className="fw-bold ms-3">22</span>
                    </td>
                    <td className="text-end pe-0">77</td>
                    <td className="text-end pe-0" data-order="rating-3">
                      <div className="rating justify-content-end">
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label checked">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                        <div className="rating-label">
                          <i className="ki-duotone ki-star fs-6" />
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0" data-order="Inactive">
                      {/*begin::Badges*/}
                      <div className="badge badge-light-danger">Inactive</div>
                      {/*end::Badges*/}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-duotone ki-down fs-5 ms-1" />
                      </a>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="../../demo18/dist/apps/ecommerce/catalog/edit-product.html"
                            className="menu-link px-3"
                          >
                            Edit
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-ecommerce-product-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </td>
                  </tr>
                </tbody>
              </table>
              {/*end::Table*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Post*/}
      </div>
    </>
  );
}
