import { computed, ref, watch } from "vue";

export function usePagination(data) {
  //total
  const total = computed(() => {
    return data.value.length;
  });
  //page-size
  const pageSize = ref(10);
  watch(
    () => pageSize.value,
    (newSize) => {
      pageSize.value = newSize;
    }
  );
  //current-page
  const currentPage = ref(1);
  watch(
    () => currentPage.value,
    (newPage) => {
      currentPage.value = newPage;
    }
  );
  //current-page-data
  const currentPageData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return data.value.slice(start, end);
  });

  return {
    total,
    pageSize,
    currentPage,
    currentPageData,
  };
}
