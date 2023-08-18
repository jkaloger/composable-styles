export default function Page() {
  return (
    <>
      <div display="flex" items="center" flex="col" align="center">
        <div w="md" display="flex" flex="col" gap="2">
          <div>
            <button
              bg="orange-700 hover:orange-400 focus:orange-600"
              cursor="pointer"
              p="x-9 y-3"
              text="white 2xl"
              border="rounded-lg none"
              outline="focus:orange-800"
              m="x-9"
              transition="all 50"
            >
              Hello World
            </button>
          </div>
          <div border="rounded-lg" flex="column" overflow="hidden">
            <div p="5" bg="green-900" text="white">
              Green 900
            </div>
            <div p="5" bg="green-100">
              Green 100
            </div>
          </div>

          <div border="rounded-lg" flex="column" overflow="hidden">
            <div p="5" bg="amber-500" text="white">
              Amber 500
            </div>
            <div p="5" bg="amber-100">
              Amber 100
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
