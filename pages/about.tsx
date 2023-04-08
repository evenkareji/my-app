import React from 'react';

import Hero from '../components/layout/Hero';
import { Box, Heading } from '@chakra-ui/react';
import { Social } from '../components/atoms/Social';
import { Inner } from '../components/layout/Inner';
import eyecatch from '../images/hero.png';
import Meta from '../components/molecules/Meta';

const About = () => {
  return (
    <>
      <Meta
        pageTitle="アバウト"
        pageDesc="自らの使命"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="~自らの使命〜" />

      <Inner>
        <Box w={{ base: '100%', md: 600 }} pb={50}>
          <p>
            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
          </p>
          <p>モノづくりで目指していること</p>
          <p>
            モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
          </p>
          <p>
            単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
          </p>
          <h3>新しいことへのチャレンジ</h3>
          <p>
            今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
          </p>

          <h2>FAQ</h2>
          <div>
            <p>
              プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
            </p>
          </div>
          <div>
            <p>
              古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。それらを読み取ってこそ古代の世界観が理解できてきます。
            </p>
          </div>
          <div>
            <p>
              公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
            </p>
          </div>
        </Box>
        <Box w={100}>
          <Heading fontSize={{ base: 1, md: 'md' }} color="gray.600">
            Contact
          </Heading>
          <Social />
        </Box>
      </Inner>
    </>
  );
};
export default About;
